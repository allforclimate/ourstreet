import { reduce } from "lodash";

const Header = ({ street }) => {
  return (
    <center>
      <table>
        <tr>
          <td width={"75%"}>
            <img
              src="/images/header-ourstreet.svg"
              style={{ width: "100%", maxWidth: "600px" }}
            />
          </td>
          <td
            rowSpan={2}
            width={"25%"}
            style={{
              backgroundImage: "url(/images/header-black-bee.png)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "60%",
              backgroundPosition: "center",
            }}
          >
            <img
              src="/images/header-hexagon.svg"
              style={{ width: "100%", maxWidth: "600px" }}
            />
          </td>
        </tr>
        <tr>
          <td>
            <img
              src={`/images/header-${street}.svg`}
              style={{ width: "100%", maxWidth: "600px" }}
            />
          </td>
        </tr>
      </table>
    </center>
  );
};

export default Header;
