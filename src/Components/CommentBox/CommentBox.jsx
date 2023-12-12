import React from 'react'
import './CommentBox.css'
export default function CommentBox() {
  return (
    <div className="comment-box p-4 white-50-b rounded">
      <div className="comment-header text-center mb-4">
        <img
          className="img-user-comment"
          src="/images/freelancer.jpg"
          alt="img-user"
        />
      </div>

      <div className="comment-body text-center">
        <q className="black-50-t">
          Proin tempus pede eros nullam vivamus convallis nunc. Sollicitudin
          cubilia porta convallis ad donec semper aliquam aptent dignissim nunc.
        </q>
      </div>

      <div className="comment-footer mt-3">
        <cite className="d-flex flex-column align-items-center">
          <span className="text-center h5 fw-bold green-t">
            Stanley Mcdonald
          </span>
          <span className="text-center black-50-t">Sumatra</span>
        </cite>
      </div>
    </div>
  );
}
