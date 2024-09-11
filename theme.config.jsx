import { ArrowLeftIcon } from "@radix-ui/react-icons";

export default {
  logo: (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 4,
        justifyContent: "center",
      }}
    >
      <ArrowLeftIcon />
      <p>SuvaDocs</p>
    </div>
  ),
  project: {
    link: "https://github.com/shuding/nextra",
  },
  footer: {
    text: <span>Suvaranjan © {new Date().getFullYear()} .</span>,
  },
};
