import { auth } from "@clerk/nextjs/server"
import { ConfigProvider } from "antd"

export default async function Layout({ children }: { children: React.ReactNode }) {
    auth().protect()

    return (
        <ConfigProvider
            theme={{
                    token: {
                        fontFamily: "var(--font-inter)"
                    },
                    components: {
                        Table: {
                            headerBg: "white",
                            headerSplitColor: "white",
                            cellPaddingInline: 24,
                            cellPaddingBlock: 0,
                            headerColor: "#6F644D"
                        }
                    }
                }
            }
        >
            {children}
        </ConfigProvider>
    )
}