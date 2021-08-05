import "./Hailstone.scss"

function Hailstone() {
  let cols = [...new Array(25)].map((v, i)=> i + 1);
  let rows = [...new Array(50)].map((v, i)=> i + 1);

  return <div className="page page-hailstone">
    <table>
      <tbody>
        {
          rows.map(row => {
            let val = 2 * row - 1;
            return <tr>
              <td>{val}</td>
              {
                cols.map(col => {
                  val = val * 2;
                  return <td>{val}</td>
                })
              }
            </tr>
          })
        }
      </tbody>
    </table>
  </div>
}

export default Hailstone;