import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CommentService } from 'src/app/shared/services/comment.service';
import { SubmitComment } from 'src/app/shared/models/submit-comment.model';
import { Comment } from 'src/app/shared/models/comment.model';
@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {

  @Input()
  reviewId: number;

  public comments: Array<Comment> = []

  public createComment: FormGroup = new FormGroup({
    Comment: new FormControl('', Validators.required),
  });

  constructor(
    private commentService: CommentService
  ) { }

  public submitComment(): void {
    const commentForm = this.createComment.get('Comment');
    if (commentForm?.valid) {
      const commentSubmit: SubmitComment = {
        review_id: this.reviewId,
        text: commentForm.value
      };
      this.commentService.submit(commentSubmit).subscribe(() => {
        const comment: Comment = {
          text: commentForm.value,
          id: 0,
          created_by: 0,
          created_at: new Date(),
          updated_at: new Date(),
          review_id: 0,
          user: {
            id: 0,
            name: 'none',
            surname: 'string',
            email: localStorage.getItem('userEmail') as string,
            created_at: new Date(),
            updated_at: new Date(),
          }
        };
        this.comments.push(comment);
        commentForm.reset();
      });
    }

  }

  ngOnInit(): void {
    this.commentService.getById(this.reviewId).subscribe((allComment) => {
      this.comments = allComment;

    })
  }

}
