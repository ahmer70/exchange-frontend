import React from "react";
import { UseGetListVehicle } from "../../hooks/vehicles";
import { Table } from "antd";
import { Link } from "react-router-dom";
const columns = [
  {
    title: "Modal",
    dataIndex: "modal",
    key: "modal",
  },
  {
    title: "Phone Number",
    dataIndex: "phone_no",
    key: "phone_no",
  },
  {
    title: "Price",
    dataIndex: "price",
    key: "price",
  },
  {
    title: "City",
    dataIndex: "city",
    key: "city",
  },
];
const List = () => {
  const { data: list, error, isLoading } = UseGetListVehicle();

  return (
    <div className="shadow-sm rounded  pt-5 vh-100">
      <Table
        title={() => (
          <div className="d-flex align-items-center justify-content-between">
            <div className="fw-bold">Vehicle List</div>
            <div>
              <Link to="/vehicle/add" className="btn btn-primary">
                Add Vehicle
              </Link>
            </div>
          </div>
        )}
        columns={columns}
        dataSource={list}
        loading={isLoading}
        pagination={false}
      />
    </div>
  );
};

export default List;
