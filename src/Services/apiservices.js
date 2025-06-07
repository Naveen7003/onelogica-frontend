import axios from "../utils/axios";

export const employeSignup = async (user) => {
  try {
    const response = await axios.post("/user/signup", user);
    return response;
  } catch (error) {
    return error.response;
  }
};

export const employeSignin = async (user) => {
  try {
    const response = await axios.post("/user/signin", user);
    return response;
  } catch (error) {
    return error.response;
  }
};

export const allUsers = async () => {
  try {
    const response = await axios.get("/user/all");
    return response;
  } catch (error) {
    return error.response;
  }
};

//loggedin user
export const loggedInUsers = async () => {
  try {
    const response = await axios.get("/user/currentuser");
    return response;
  } catch (error) {
    return error.response;
  }
};
// POST  /user/signout   (needs auth token in axios defaults/interceptor)
export const employeSignout = async () => {
  try {
    const res = await axios.post("/user/signout");
    return res;
  } catch (err) {
    throw err.response ?? err;
  }
};

/* ────────────────  TASK ROUTES  ──────────────── */

// POST  /task          → create new task
export const createTask = async (payload) => {
  try {
    const res = await axios.post("/task/task", payload);
    return res;
  } catch (err) {
    throw err.response ?? err;
  }
};

// GET   /tasks         → fetch all tasks
export const getAllTasks = async (page = 1, limit = 10) => {
  try {
    const res = await axios.get(`/task/tasks?page=${page}&limit=${limit}`);
    return res;
  } catch (err) {
    throw err.response ?? err;
  }
};

// GET   /task/:id      → fetch one task
export const getTaskById = async (taskId) => {
  try {
    const res = await axios.get(`/task/task/${taskId}`);
    return res.data;
  } catch (err) {
    throw err.response ?? err;
  }
};

// PUT   /task/:id      → update entire task / partial patch
export const updateTask = async (taskId, updates) => {
  try {
    const res = await axios.put(`/task/task/${taskId}`, updates);
    return res;
  } catch (err) {
    throw err.response ?? err;
  }
};

// Assign task
export const assignTasksToUser = async (taskIds, userId) => {
  try {
    const response = await axios.post("/task/assign-task", { taskIds, userId });
    return response;
  } catch (error) {
    throw error.response.data;
  }
};

// DELETE /task/:id     → remove task
export const deleteTask = async (taskId) => {
  try {
    const res = await axios.delete(`/task/task/${taskId}`);
    return res;
  } catch (err) {
    throw err.response ?? err;
  }
};
