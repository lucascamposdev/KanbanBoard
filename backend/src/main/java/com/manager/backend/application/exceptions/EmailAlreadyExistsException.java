package com.manager.backend.application.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.http.ProblemDetail;

public class EmailAlreadyExistsException extends ApplicationException{
    private String detail;

    public EmailAlreadyExistsException(String detail){
        this.detail = detail;
    }

    @Override
    public ProblemDetail toProblemDetail(){
        var pb = ProblemDetail.forStatus(HttpStatus.UNPROCESSABLE_ENTITY);
        pb.setTitle("Email already exists");
        pb.setDetail(detail);
        return pb;
    }
}
