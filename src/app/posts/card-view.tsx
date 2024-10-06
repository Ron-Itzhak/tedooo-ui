import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
interface CardTopProps {
  id: string;
}
const CardView = ({ id }: CardTopProps) => {
  const [isSent, setIsSent] = useState<boolean>(false);

  const { ref, inView } = useInView({
    threshold: 0,
  });

  const sendImpression = async (postId: string) => {
    const url = `${process.env.NEXT_PUBLIC_API}`;

    try {
      await fetch(`${url}/?itemId=${postId}`);
    } catch (error) {
      console.error("Failed to send post view request:", error);
    }
  };

  useEffect(() => {
    if (!isSent && inView) {
      sendImpression(id);
      setIsSent(true);
    }
  }, [inView, id, isSent]);

  return <div ref={ref}></div>;
};

export default CardView;
