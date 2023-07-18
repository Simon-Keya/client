import React, { useState } from 'react';

interface Comment {
  id: number;
  author: string;
  content: string;
}

interface CommentSectionProps {
  comments: Comment[];
  onAddComment: (comment: Comment) => void;
}

const CommentSection: React.FC<CommentSectionProps> = ({
  comments,
  onAddComment,
}) => {
  const [author, setAuthor] = useState('');
  const [content, setContent] = useState('');

  const handleAddComment = () => {
    const newComment: Comment = {
      id: comments.length + 1,
      author,
      content,
    };
    onAddComment(newComment);
    setAuthor('');
    setContent('');
  };

  return (
    <div className="comment-section">
      <h3>Comments</h3>
      <div className="comment-list">
        {comments.map((comment) => (
          <div key={comment.id} className="comment">
            <p>Author: {comment.author}</p>
            <p>{comment.content}</p>
          </div>
        ))}
      </div>
      <div className="add-comment">
        <h4>Add a Comment</h4>
        <input
          type="text"
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <textarea
          placeholder="Comment"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
        <button onClick={handleAddComment}>Add Comment</button>
      </div>
    </div>
  );
};

export default CommentSection;
