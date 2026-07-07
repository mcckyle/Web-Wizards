package org.launchcode.BackEnd.models.dto;



public class RegisterFormDTO extends LoginFormDTO {

    private String verifyPassword;

    public String getVerifyPassword() {
        return verifyPassword;
    }

    public void setVerifyPassword(String verifyPassword) {
        this.verifyPassword = verifyPassword;
    }

}
/*
 * Second round of validation with the annotations
 * Ensures that the password is verified correctly with the registration from/ form has two fields to verify.
 */
