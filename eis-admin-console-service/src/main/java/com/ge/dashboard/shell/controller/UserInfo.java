package com.ge.dashboard.shell.controller;

import java.util.ArrayList;
import java.util.List;

public class UserInfo {

	private String user;

	private List<String> roles = new ArrayList<String>();

	public UserInfo(String user) {
		super();
		this.user = user;
	}

	public UserInfo() {
		// TODO Auto-generated constructor stub
	}

	public String getUser() {
		return user;
	}

	public void setUser(String user) {
		this.user = user;
	}

	public List<String> getRoles() {
		return roles;
	}

}
