interface Comment {
  id: number;
  name: string;
  email: string;
  body: string;
}

interface CommentsListProps {
  comments: Comment | null;
}

const CommentsList = ({ comments }: CommentsListProps) => {
  console.log("-----------CommentsList.tsx----------");
  console.log(comments);

  return <div>CommentsList</div>;
};

export default CommentsList;
