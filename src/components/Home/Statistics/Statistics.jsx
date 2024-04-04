import { useLoaderData } from "react-router-dom";
import { ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

const Statistics = () => {
    const datas = useLoaderData();
    const totalDonated = JSON.parse(localStorage.getItem('donation'))
    console.log(totalDonated);
    const totalDonationCount = totalDonated?.length || [];
    // 
    const noDonatedCount = datas.length - totalDonationCount;
    // console.log(datas);
    // console.log(totalDonationCount);
    console.log(noDonatedCount);
    const data = [
        { name: "Not Donated", value: noDonatedCount, color: "red" },
        { name: "Donated", value: totalDonationCount, color: "green" }
    ];
    if(noDonatedCount==null){
        return <h1>No Data Found</h1>
    }
    return (
        <div className="h-[50vh] flex justify-center items-center">
            <div>
            {noDonatedCount && <div style={{ width: "100%", height: 300 }}>
                <ResponsiveContainer>
                    <PieChart>

                        <Pie dataKey="value" data={data} label>
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                        </Pie>

                    </PieChart>
                </ResponsiveContainer>
                <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
                    {data.map((item,idx) => (
                        <p key={idx}>
                            {" "}
                            <span
                                style={{ padding: "1px 10px ", backgroundColor: item.color }}
                            ></span>{" "}
                            {item.name}
                        </p>
                    ))}
                </div>
            </div>}
            </div>
        </div>
    );
};

export default Statistics;