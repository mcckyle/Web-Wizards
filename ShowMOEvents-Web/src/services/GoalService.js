//****************************************************************************************
// Filename: GoalService.js
// Date: 15 March 2026
// Author: Kyle McColgan
// Description: This file contains the frontend GoalService for PotOfGoals.
//****************************************************************************************

import request from "../api/apiClient";

/**
 * Create a new goal.
 *
 * @param {Object} params
 * @param {string} token - JWT access token
 *
 * @returns {Promise<{ url: string }>}
 */
export async function createGoal({ title, description }, token)
{
	return request("", {
		method: "POST",
		token,
		body: { title, description }
	});
}

export async function getUserGoals(token)
{
	return request("", { method: "GET", token });
}

export async function updateGoal(id, data, token)
{
	return request(`/${id}`, {
		method: "PATCH",
		token,
		body: data
	});
}

export async function updateGoalProgress(id, progress, token)
{
	return request(`/${id}/progress`, {
		method: "PATCH",
		token,
		body: { progress }
	});
}

export async function deleteGoal(id, token)
{
	return request(`/${id}`, { method: "DELETE", token });
}