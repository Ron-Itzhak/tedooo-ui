"use client";
import { Button } from "@/components/ui/button";
import { ThumbsUp, MessageSquare } from "lucide-react";
import React, { useState } from "react";
import SVGIcon from "../../lib/assets/like.svg";
import Image from "next/image";

interface bottomProps {
  likesCounter: number;
  commentCounter: number;
}
const CardBottom = ({ likesCounter, commentCounter }: bottomProps) => {
  const [likeCount, setLikeCount] = useState<number>(likesCounter);
  const [isLiked, setIsLiked] = useState<boolean>(false);

  const handleLike = () => {
    if (!isLiked) {
      setLikeCount(likeCount + 1);
      console.log(likeCount);
    } else {
      setLikeCount(likeCount - 1);
    }
    setIsLiked(!isLiked);
  };

  return (
    <>
      <div className="flex items-center justify-between w-full text-muted-foreground mb-2 max-w-[1072px]">
        <div className="flex flex-row justify-between">
          <Image src={SVGIcon} alt="Logo - SVG" />
          <span className="pl-2		 text-tedooo-txt-grey-bt">
            {likeCount} Likes
          </span>
        </div>
        <span className="text-tedooo-txt-grey-bt">
          {commentCounter} Comments
        </span>
      </div>
      <div className="flex justify-between w-full border-t pt-2 max-w-[1072px]">
        <Button
          onClick={handleLike}
          variant="ghost"
          className={
            isLiked
              ? "flex-1 text-sm text-tedooo-txt-blue"
              : "text-sm flex-1 text-tedooo-bg-black"
          }
        >
          <ThumbsUp
            className={
              isLiked
                ? "w-4 h-4 mr-2  text-tedooo-txt-blue"
                : "w-4 h-4 mr-2 text-tedooo-txt-grey-bt"
            }
          />
          Like
        </Button>
        <Button variant="ghost" className="flex-1 text-sm text-tedooo-bg-black">
          <MessageSquare className="w-4 h-4 mr-2 text-tedooo-txt-grey-bt" />
          Comment
        </Button>
      </div>
    </>
  );
};

export default CardBottom;
