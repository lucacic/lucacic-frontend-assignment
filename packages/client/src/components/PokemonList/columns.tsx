import { Tag, Image,Typography} from 'antd';

const { Title } = Typography;



const columns = (keySearch: string | null) => {

    const creaCodiceHtml = (text: string) => {
       if (keySearch) {
        return { __html: text.replace(new RegExp(keySearch,'gi'),`<mark style="background: yellow; padding: 0">${keySearch}</mark>`)}
       } else {
        return { __html: text }
       }
    }


    return (
        [
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
                render: (text: string) => (
                    <h2 dangerouslySetInnerHTML={creaCodiceHtml(text)}/>
                ) 
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
        ]
    )

}


export default columns;