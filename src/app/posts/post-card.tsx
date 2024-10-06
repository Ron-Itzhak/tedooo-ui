import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Post } from "./types";
import CardBottom from "./card-bottom";
import CardView from "./card-view";
import PostImages from "./post-images";
export default function PostCard({
  id,
  avatar,
  username,
  shopName,
  images,
  text,
  likes,
  comments,
}: Post) {
  return (
    <Card className="w-[1120px] h-[753px] overflow-hidden">
      <CardView id={id} />
      <CardHeader className=" flex flex-row items-center gap-4 p-4">
        <Avatar className="w-12 h-12">
          <AvatarImage src={avatar} alt="avatar" />
          <AvatarFallback>{username}</AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <h2 className="text-lg font-medium capitalize">{username}</h2>
          <div className="flex flex-row space-x-1">
            <p className="text-sm text-tedooo-txt-blue font-medium	capitalize">
              {shopName}
            </p>
            <p className="text-sm text-tedooo-bg-grey font-medium"> · 1h</p>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4  p-0 pt-0 py-2">
        <p className="text-sm px-6 text-black font-normal ">{text}</p>
        <PostImages images={images} />
      </CardContent>
      <CardFooter className="p-4 pt-0 flex flex-col">
        <CardBottom likesCounter={likes} commentCounter={comments}></CardBottom>
      </CardFooter>
    </Card>
  );
}
