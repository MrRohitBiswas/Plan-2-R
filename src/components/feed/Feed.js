import React from "react";
import "./Feed.css";
export default function feed() {
  return (
    <div className="container feedBody">
      <div class="post-cards">
        <div class="card">
          <div class="card-header">
            <div class="cirkiter">tc/username</div>
            <div class="post-time">1 hour ago</div>
          </div>
          <div class="card-body">
            <h2 class="post-title">
              Title of the question goes here
            </h2>
            <div class="post-content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
          </div>
          <div class="card-footer">
            <div class="upvotes">10.4k likes</div>
            <div class="comments">312 comments</div>
          </div>
        </div>
        <>
          <div class="comment-section">
            <div class="comment">
              <div class="comment-meta">
                <div class="comment-author">John Doe</div>
                <div class="comment-time">2 hours ago</div>
              </div>
              <div class="comment-content">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam quis risus eget urna mollis ornare vel eu leo.
                </p>
              </div>
              <div class="comment-actions">
                <button class="comment-reply-button">Reply</button>
              </div>
              <div class="comment-replies">
                <div class="comment">
                  <div class="comment-meta">
                    <div class="comment-author">Jane Doe</div>
                    <div class="comment-time">1 hour ago</div>
                  </div>
                  <div class="comment-content">
                    <p>
                      Sed posuere consectetur est at lobortis. Donec ullamcorper
                      nulla non metus auctor fringilla.
                    </p>
                  </div>
                  <div class="comment-actions">
                    <button class="comment-reply-button">Reply</button>
                  </div>
                </div>
              </div>
            </div>
            <div class="comment">
              <div class="comment-meta">
                <div class="comment-author">Bob Smith</div>
                <div class="comment-time">3 hours ago</div>
              </div>
              <div class="comment-content">
                <p>
                  Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                  Nulla vitae elit libero, a pharetra augue.
                </p>
              </div>
              <div class="comment-actions">
                <button class="comment-reply-button">Reply</button>
              </div>
            </div>
          </div>
        </>

        {/* more posts */}
      </div>
    </div>
  );
}
