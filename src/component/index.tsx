const UsersList = ({ data

}: {
    data: any;
}) => {
    console.log(data);

    return (
        <div>
            <table>
                <tr>
                    <td>Name</td>
                    <td>Age</td>

                </tr>
                {/* {data.map((student: any, index: number) => <tr>
                    <td>{student.name}</td>
                    <td>{student.age}</td>

                </tr>)
                } */}

                {data.map((student: any, index: number) => {
                    return <tr>
                        <td>{student.name}</td>
                        <td>{student.age}</td>

                    </tr>
                })
                }
            </table>
        </div>
    )
}
export default UsersList