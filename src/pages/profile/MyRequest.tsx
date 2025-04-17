import { Table } from "antd";

const columns = [
  {
    title: "S.N.",
    dataIndex: "sn",
    key: "sn",
    width: "10%",
  },
  {
    title: "Actions",
    key: "actions",
    dataIndex: "actions",
    width: "40%",
  },
  {
    title: "Date",
    dataIndex: "date",
    key: "date",
    width: "30%",
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
    width: "20%",
  },
];

const dataSource = [
  // Sample data, you can fill this dynamically
  {
    key: "1",
    sn: 1,
    date: "2025-04-18",
    actions: "Action",
    status: "Pending",
  },
];

const MyRequest = () => {
  return (
    <div>
      <>
        <Table
          columns={columns}
          dataSource={dataSource}
          pagination={{
            position: ["bottomCenter"],
            pageSize: 10,
            showSizeChanger: true,
          }}
        />
      </>
    </div>
  );
};

export default MyRequest;
