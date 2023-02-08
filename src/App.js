import { ProForm, ProFormDigit } from '@ant-design/pro-components';

const App = () => {
    return (
        <ProForm
            onFinish={async (values) => {
                alert(values.num);
            }}
        >
            <ProFormDigit name="num" placeholder="请输入 1.2.3 并提交" fieldProps={{ precision: 0 }} />
        </ProForm>
    );
};

export default App;
