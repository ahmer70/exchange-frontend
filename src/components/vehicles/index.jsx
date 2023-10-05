import React from "react";
import { Form, Input, Select, Upload, Radio } from "antd";
import { UseAddVehicle } from "../../hooks/vehicles";

const Vehicles = () => {
  const [form] = Form.useForm();
  const mutation = UseAddVehicle();
  const onFinish = (values) => {
    const { city, modal, phoneNumber, pictures, price } = values;

    let formData = new FormData();
    formData.append("city", city);
    formData.append("modal", modal);
    formData.append("phone_no", phoneNumber);
    formData.append("price", price);
    pictures.forEach((element) => {
      formData.append("file", element.originFileObj);
    });
    mutation.mutate(formData);
  };

  const normFile = (e) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };

  return (
    <div className="shadow p-4 rounded">
      <h4>Add Vehicle</h4>
      <Form
        form={form}
        layout="vertical"
        autoComplete="off"
        size={"large"}
        onFinish={onFinish}
        initialValues={{ city: "Karachi", totalPictures: 2 }}
      >
        {" "}
        <Form.Item
          name="modal"
          label="Modal"
          rules={[
            {
              required: true,
              message: "Please enter the Modal",
            },
          ]}
        >
          <Input type="text" />
        </Form.Item>
        <Form.Item
          name="price"
          label="Price"
          rules={[
            {
              required: true,
              message: "Please enter the price",
            },
            {
              pattern: /^[0-9]+$/,
              message: "Please enter a valid numeric value for the price",
            },
          ]}
        >
          <Input type="text" />
        </Form.Item>
        <Form.Item
          name="phoneNumber"
          label="Phone Number"
          rules={[
            {
              pattern: /^[0-9]{1,11}$/,
              message: "Please enter a valid phone number (up to 11 digits)",
            },
            {
              required: true,
              message: "Please enter a phone number",
            },
          ]}
        >
          <Input type="tel" />
        </Form.Item>
        <Form.Item
          name="city"
          label="City"
          rules={[
            {
              required: true,
              message: "Please select a city",
            },
          ]}
        >
          <Radio.Group defaultValue="Karachi" name="cityGroup">
            <Radio value="Karachi">Karachi</Radio>
            <Radio value="Islamabad">Islamabad</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item
          name="totalPictures"
          label="No of copies"
          rules={[
            {
              required: true,
              message: "Please select the total number of copies",
            },
          ]}
        >
          <Select
            placeholder="Select no of copies"
            options={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((count) => ({
              value: count,
              label: count,
            }))}
          />
        </Form.Item>
        <Form.Item
          name="pictures"
          label="Pictures"
          valuePropName="fileList"
          getValueFromEvent={normFile}
          rules={[
            {
              required: true,
              message: "Please upload picture",
            },
          ]}
        >
          <Upload
            name="pictures"
            listType="picture-card"
            beforeUpload={() => false}
            maxCount={form.getFieldValue("totalPictures")}
            showUploadList={{
              showPreviewIcon: true,
              showRemoveIcon: true,
              showDownloadIcon: false,
            }}
          >
            Upload
          </Upload>
        </Form.Item>
        <Form.Item className="w-100 text-end">
          <button
            type="submit"
            disabled={mutation.isLoading}
            className="btn btn-dark py-2 mt-2 col-md-2 rounded "
          >
            Submit
          </button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Vehicles;
