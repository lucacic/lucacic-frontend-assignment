import { Tag, Image,Typography} from 'antd';

const { Title } = Typography;

const columns = [
    {
        title: "",
        dataIndex: "id",
        key: "id",
        render: (id: any) => (
            <Image
                width={100}
                height={100}
                src={`https://pokeres.bastionbot.org/images/pokemon/${Number(id)}.png`}
            />
        )
    },
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render: (text: string) => <Title level={4}>{text}</Title>
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