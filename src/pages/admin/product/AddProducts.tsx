import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { IProduct } from '../../../interface/product';
import { Button, Checkbox, Form, Input } from 'antd';
import { message } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import type { RcFile, UploadProps } from 'antd/es/upload';
import type { UploadFile } from 'antd/es/upload/interface';
import { Modal, Upload, Select } from 'antd';
import { useNavigate } from 'react-router-dom';

const { Option } = Select;
const getBase64 = (file: RcFile): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });

  
  interface IProps {
    onAdd: (product: IProduct) => void;
  }
  
  const AddProductPage = (props: IProps) => {
  const navigate = useNavigate();
  const onFinish = (values: any) => {
    props.onAdd(values);
    message.success('Sản Phẩm Được Thêm Thành Công');
    navigate('/admin/products');
    
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState('');
  const [previewTitle, setPreviewTitle] = useState('');
  const [fileList, setFileList] = useState<UploadFile[]>([]);

  const handleCancel = () => setPreviewOpen(false);

  const handlePreview = async (file: UploadFile) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj as RcFile);
    }
    setPreviewImage(file.url || (file.preview as string));
    setPreviewOpen(true);
    setPreviewTitle(file.name || file.url!.substring(file.url!.lastIndexOf('/') + 1));
  };

  const handleChange: UploadProps['onChange'] = ({ fileList: newFileList }) =>
    setFileList(newFileList);

  const uploadButton = (
    <div>
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );

  return (
    <div>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Tên Sản Phẩm"
          name="name"
          rules={[{ required: true, message: 'Vui lòng nhạp tên sản phẩm !' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Giá"
          name="price"
          rules={[{ required: true, message: 'Vui lòng nhập giá tiền!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Ảnh"
          name="image"
          rules={[{ required: true, message: 'Vui Lòng nhập ảnh!' }]}
        >
          <Input />
          {/* <Upload
            name="image"
            action="https://example.com/upload" // Thay đổi giá trị này để phù hợp với server của bạn
            listType="picture-card"fileList={fileList}
            onPreview={handlePreview}
            onChange={handleChange}
          >
            {fileList.length >= 8 ? null : uploadButton}
          </Upload> */}
        </Form.Item>

        <Modal open={previewOpen} title={previewTitle} footer={null} onCancel={handleCancel}>
          <img alt="example" style={{ width: '100%' }} src={previewImage} />
        </Modal>

        <Form.Item
          label="Mô Tả Sản Phẩm"
          name="description"
          rules={[{ required: true, message: 'Vui Lòng nhâp sản phẩm !' }]}
        >
          <Input />
        </Form.Item>

        

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Add New Product
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default AddProductPage;