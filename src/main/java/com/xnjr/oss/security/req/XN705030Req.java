package com.xnjr.oss.security.req;

import com.xnjr.oss.req.APageReq;

public class XN705030Req extends APageReq {

    /** 
     * @Fields serialVersionUID : TODO(用一句话描述这个变量表示什么) 
     */
    private static final long serialVersionUID = 8457280753217715391L;

    // 用户编号（选填）
    private String userCode;

    // 用户名称（选填）
    private String userName;

    // 密码（选填）
    private String password;

    // 状态：1、正常2、注销（选填）
    private String status;

    // 应用编号（必填）
    private String applyID;

    public String getUserCode() {
        return userCode;
    }

    public void setUserCode(String userCode) {
        this.userCode = userCode;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getApplyID() {
        return applyID;
    }

    public void setApplyID(String applyID) {
        this.applyID = applyID;
    }
}
