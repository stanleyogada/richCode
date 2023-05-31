import { useState } from "react";

const useSendEmail = () => {
  const [state, setState] = useState({
    loading: false,
    success: false,
    error: false,
  });

  const handleSend = ({
    from_name,
    to_name,
    from_email,
    message,
    onSuccess,
  }) => {
    setState({
      loading: true,
      success: false,
      error: false,
    });

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name,
          to_name,
          from_email,
          message,
          to_email: import.meta.env.VITE_APP_MY_EMAIL_ADDRESS,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setState({
            loading: false,
            success: true,
            error: false,
          });

          onSuccess();
        },
        (error) => {
          setLoading({ loading: false, success: false, error: true });
          console.error(error);
        }
      );
  };

  return {
    handleSend,
    state,
  };
};

export default useSendEmail;
