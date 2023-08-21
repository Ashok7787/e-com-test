import React, { useState } from "react";
import { Select, Input, Form, Button } from "antd";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getOrders, checkAddress } from "./MainAction";

const { Option } = Select;

const SearchAndSelect = (props) => {
  const [searchValue, setSearchValue] = useState("");
  const [selectedValue, setSelectedValue] = useState("");
  const newData = props.post;
  const handleSearchChange = (value) => {
    setSearchValue(value);
    props.getOrders(value);
  };

  const handleSelectChange = (value) => {
    setSelectedValue(value);
  };
  const handleSelectChangeValue = (value) => {
    props.checkAddress(value);
  };

  const onFinish = (values) => {
    console.log(values);
    // props.registerUser(values);
  };
  const options = props.post;
  const prefixSelector = (
    <Form.Item noStyle>
      <Select
        style={{
          width: 70,
        }}
      >
        <Option>+91</Option>
      </Select>
    </Form.Item>
  );
  const initialValues = {
    email: "",
    password: "",
    name: "",
    mobile: "",
    country: "",
    currency: "",
    otp: "",
    password: "",
    discord: "",
    wallet: "",
  };
  return (
    <>
      <div className="felx flex-col justify-center w-full">
        <div className="flex flex-col m-5 justify-center space-y-3">
          <Input.Search
            placeholder="Search..."
            onChange={(e) => handleSearchChange(e.target.value)}
          />
          <p>Choose your address</p>
          <Select
            showSearch
            placeholder="Select an option"
            value={selectedValue}
            onChange={handleSelectChangeValue}
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
            {options &&
              options.map((option, index) => (
                <Option
                  key={index}
                  values={`${option.Address.building_name}${option.Address.sub_building}${option.Address.BuildingNumber}${option.Address.Locality}${option.Address.PostCode}${option.Address.Street}`}
                >
                  {option.Address.building_name},&nbsp;
                  {option.Address.sub_building},&nbsp;
                  {option.Address.BuildingNumber},&nbsp;
                  {option.Address.Locality},&nbsp;{option.Address.PostCode}
                  &nbsp;,{option.Address.Street}
                </Option>
              ))}
          </Select>
        </div>
        <div className="flex flex-col m-5 justify-center space-y-3">
          <Form
            className=" flex flex-col justify-center"
            layout="vertical"
            onFinish={onFinish}
            initialValues={initialValues}
            // validateMessages={validateMessages}
          >
            <div className="flex flex-row w-full gap-3">
              <div className="w-1/2">
                <Form.Item
                  name="name"
                  rules={[
                    {
                      required: true,
                      message: "Please input your name!",
                    },
                  ]}
                >
                  <Input placeholder="Firstname" />
                </Form.Item>
              </div>
              <div className="w-1/2">
                <Form.Item
                  name="name"
                  rules={[
                    {
                      required: true,
                      message: "Please input your name!",
                    },
                  ]}
                >
                  <Input placeholder="Lastname" />
                </Form.Item>
              </div>
            </div>

            <Form.Item
                  name="mobile"
                  
                  rules={[
                    {
                      required: true,
                      message: "Please input your phone number!",
                    },
                  ]}
                >
                  <Input
                    addonBefore={prefixSelector}
                    style={{
                      width: "100%",
                    }}
                    placeholder="Phone Number"
                  />
                </Form.Item>
            <Form.Item
             // label="Email"
              name="email"
              rules={[
                {
                  type: "email",
                  message: "The input is not valid E-mail!",
                },
                {
                  required: true,
                  message: "Please input your E-mail!",
                },
              ]}
              hasFeedback
            >
              <Input />
            </Form.Item>

            <div className="w-3/5 flex justify-center flex-row">
              <Button
                type="primary"
                htmlType="submit"
                className="bg-blue-500 w-full text-white rounded-full text-lg border border-blue-600 self-center"
              >
                Submit
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = ({ main }) => ({
  post: main.post,
});
const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ getOrders, checkAddress }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(SearchAndSelect);
