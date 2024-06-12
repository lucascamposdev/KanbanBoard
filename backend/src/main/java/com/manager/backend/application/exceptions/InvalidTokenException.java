package com.manager.backend.application.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.http.ProblemDetail;

public class InvalidTokenException extends ApplicationException{
    private String detail;

    public InvalidTokenException(String detail){
        this.detail = detail;
    }

    @Override
    public ProblemDetail toProblemDetail(){
        var pb = ProblemDetail.forStatus(HttpStatus.UNPROCESSABLE_ENTITY);
        pb.setTitle("Invalid Token");
        pb.setDetail(detail);
        return pb;
    }
}
