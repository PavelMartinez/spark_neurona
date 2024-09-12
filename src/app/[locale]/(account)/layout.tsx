import { dbConnect } from "@/database/db";
import { auth } from "@clerk/nextjs/server"
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { ConfigProvider } from "antd"

export default async function Layout({ children }: { children: React.ReactNode }) {
    auth().protect()
    await dbConnect();
    
    return (
        <ConfigProvider
            theme={{
                    token: {
                        fontFamily: "var(--font-inter)",
                        colorBgContainer: "#131313",
                        colorText: "#FCFCFC",
                        colorBgElevated: "#131313"
                    },
                    components: {
                        Table: {
                            headerBg: "#131313",
                            headerSplitColor: "#131313",
                            cellPaddingInline: 24,
                            cellPaddingBlock: 0,
                            headerColor: "#93949A"
                        },
                        Message: {
                            contentBg: "#131313"
                        },
                    }
                }
            }
        >
            {children}
        </ConfigProvider>
    )
}