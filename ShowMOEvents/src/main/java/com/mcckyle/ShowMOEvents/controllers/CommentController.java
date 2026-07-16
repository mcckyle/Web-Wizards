//***************************************************************************************
//
//   Filename: CommentController.java
//   Author: Kyle McColgan
//   Date: 13 July 2026
//   Description: This file provides Comment functionality.
//
//***************************************************************************************

package com.mcckyle.ShowMOEvents.controllers;

import jakarta.transaction.Transactional;
import com.mcckyle.ShowMOEvents.models.Comment;
import com.mcckyle.ShowMOEvents.models.Post;
import com.mcckyle.ShowMOEvents.models.User;
import com.mcckyle.ShowMOEvents.data.UserRepository;
import com.mcckyle.ShowMOEvents.data.CommentRepository;
import com.mcckyle.ShowMOEvents.data.PostRepository;
import com.mcckyle.ShowMOEvents.payload.CommentDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;

@RestController
@RequestMapping("/comments")
public class CommentController
{
    @Autowired
    private PostRepository postRepository;

    @Autowired
    private CommentRepository commentRepository;

    @Autowired
    private UserRepository userRepository;

    @CrossOrigin
    @GetMapping("/{postId}")
    public ResponseEntity<List<Comment>> getAllCommentsByPostID(@PathVariable Integer postId)
    {
        Optional<Post> post = postRepository.findById(postId);

        if(post.isPresent())
        {
            List<Comment> comments = commentRepository.findByPostId(postId);
            return new ResponseEntity<>(comments, HttpStatus.OK);
        }
        else
        {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @Transactional
    @CrossOrigin
    @PostMapping("/{postId}")
    public ResponseEntity<Comment> createComment(@PathVariable Integer postId, @RequestBody CommentDTO commentDTO)
    {
        try
        {
            Post post = postRepository.findById(postId).orElseThrow(() -> new NoSuchElementException("Post not found"));

            User user = userRepository.findById(commentDTO.getUserId()).orElseThrow(() -> new NoSuchElementException("User not found when adding comments..."));

            Integer userId = commentDTO.getUserId();


            Comment comment = new Comment();
            comment.setText(commentDTO.getText());
            comment.setPost(post);
            //comment.setUser(user); //No .setUser() only setUserId()...
            //comment.setUserId(user.getId()); //This line causes a stack overflow...
            comment.setUser(user);
            //setUserForComment(comment, userId);
            comment.setCreatedAt(LocalDate.parse(commentDTO.getCreatedAt()));

            Comment savedComment = commentRepository.save(comment);

            return ResponseEntity.ok(savedComment);
        }
        catch(Exception e)
        {
            //Return a 500 status code with an error message...
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
        }
    }

    @PutMapping("/{postId}")
    public Comment updateComment(@PathVariable Integer postId, @PathVariable Integer commentID, @RequestBody Comment commentRequest)
    {
        if(!postRepository.existsById(postId))
        {
            throw new NoSuchElementException("Post not found with ID: " + postId);
        }

        return commentRepository.findById(commentID).map(comment -> {
            comment.setText(commentRequest.getText());
            return commentRepository.save(comment);
        }).orElseThrow(() -> new NoSuchElementException("Comment not found with ID" + commentID));
    }

    @DeleteMapping("/{postId}")
    public ResponseEntity<?> deleteComment(@PathVariable Integer postId, @PathVariable Integer commentID)
    {
        if(!postRepository.existsById(postId))
        {
            throw new NoSuchElementException("Post not found with ID: " + postId);
        }

        return commentRepository.findById(commentID).map(comment -> {
            commentRepository.delete(comment);
            return ResponseEntity.ok().build();
        }).orElseThrow(() -> new NoSuchElementException("Comment not found with ID" + commentID));
    }

//    private void setUserForComment(Comment comment, Integer userId)
//    {
//        //Set the user ID without causing a stack overflow...
//        comment.setUserId(userId);
//    }
}
