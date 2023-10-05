import React from "react";
import { Checkbox, Form, Input } from "antd";
import api from "../../utils/api";
import { queryClient } from "../..";
import { useMutation } from "@tanstack/react-query";
const Login = () => {
  const [form] = Form.useForm();

  const loginMutation = useMutation({
    mutationFn: async (newTodo) => {
      let res = await api.post("/users/login", { ...newTodo });
      return res.data;
    },
    onSuccess: (data) => {
      localStorage.setItem("token", data.token);
      queryClient.invalidateQueries({ queryKey: ["user"] });
    },
    onError: (error) => {
      console.log({ error });
      form.validateFields().then(() => {
        form.setFields([
          {
            name: "password",
            errors: ["Provided credentials are incorrect"],
          },
          {
            name: "email",
            errors: [""],
          },
        ]);
      });
    },
  });
  return (
    <Form
      form={form}
      name="basic"
      requiredMark={true}
      layout="vertical"
      onFinish={loginMutation.mutate}
      autoComplete="off"
      size={"large"}
    >
      <Form.Item
        className="login-form "
        label={<label className="login-field__label">Your email</label>}
        name="email"
        rules={[
          {
            required: true,
            message: "Email is required!",
          },
        ]}
      >
        <Input
          className="bg-transparent rounded"
          placeholder="E.g. example@gmail.com"
        />
      </Form.Item>

      <Form.Item
        className="login-form bg-transparent"
        label={<label className="login-field__label">Password</label>}
        name="password"
        rules={[
          {
            required: true,
            message: "Password is required!",
          },
        ]}
      >
        <Input.Password
          className="bg-transparent rounded"
          placeholder="Password "
        />
      </Form.Item>
      <Form.Item name="remember" valuePropName="checked">
        <Checkbox>Remember me</Checkbox>
      </Form.Item>
      <Form.Item>
        <button
          type="submit"
          disabled={loginMutation.isLoading}
          className="btn btn-dark py-2 mt-2 w-100 rounded "
        >
          Login
        </button>
      </Form.Item>
    </Form>
  );
};
export default Login;
