import { auth } from "@clerk/nextjs/server"
import { ConfigProvider } from "antd"

export default async function Layout({ children }: { children: React.ReactNode }) {
    auth().protect()

    return (
        <ConfigProvider
            theme={{
                    token: {
                        fontFamily: "var(--font-inter)",
                        colorBgContainer: "#131313"
                    },
                    components: {
                        Table: {
                            headerBg: "#131313",
                            headerSplitColor: "#131313",
                            cellPaddingInline: 24,
                            cellPaddingBlock: 0,
                            headerColor: "#93949A"
                        }
                    }
                }
            }
        >
            {children}
        </ConfigProvider>
    )
}