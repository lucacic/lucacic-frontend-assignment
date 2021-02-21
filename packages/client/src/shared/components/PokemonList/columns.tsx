import { Tag } from 'antd';

const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render: (text: any) => <a>{text}</a>,
    },
    {
        title: 'Classification',
        dataIndex: 'classification',
        key: 'classification',
    },
    {
        title: 'Types',
        key: 'types',
        dataIndex: 'types',
        render: (types: any) => (
            <>
                {types?.map((type: any) => {
                    let color = type.length > 5 ? 'geekblue' : 'green';
                    if (type === 'loser') {
                        color = 'volcano';
                    }
                    return (
                        <Tag color={color} key={type}>
                            {type.toUpperCase()}
                        </Tag>
                    );
                })}
            </>
        ),
    },
];

export default columns;