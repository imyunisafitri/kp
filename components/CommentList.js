import React from "react";

const CommentList = ({ comments }) => {
  if (!Array.isArray(comments) || comments.length === 0) {
    return <p className="max-w-2xl mb-4 mx-auto px-4 stext-l lg:text-l font-bold text-gray-700 dark:text-black">Belum ada komentar</p>;
  }
  return (
    <>
  <div className="max-w-2xl mx-auto px-4">
  <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg lg:text-2xl font-bold text-gray-600">Semua Komentar</h2>
    </div>
    <div>
        <ul>
          {comments.map((comment) => (
            <li key={comment._id} className="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border-b border-gray-400">
              <p className="text-gray-400">{comment.comment}</p>
            </li>
          ))}
        </ul>
    </div>
  </div>
    </>
  );
};

export default CommentList;
