import React from 'react'

const Table = () => {
  return (
    
    
    
    <div className="flex-row mt-4">
        <div className="grid grid-cols-1 divide-x-{} p-4 m-2 bg-white">
          <table className="table-fixed">
            <thead>
              <tr>
                <th className="w-3/4 px-4 py-2">Products</th>
                <th className="w-1/4 px-4 py-2">Location</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td className="border px-4 ">
                  <div className="grid grid-cols-3 divide-x">
                    <div> mmm</div>

                    <div>image02</div>
                    <div>image03</div>
                  </div>
                </td>
                <td className="border px-4 py-2">Map</td>
              </tr>

              <tr className="bg-blue-100">
                <td className="border px-4 py-2">
                  <div className="grid grid-cols-3 divide-x">
                    <div>moreinfo101</div>
                    <div>moreinfo02</div>
                    <div>moreinfo03</div>
                  </div>
                </td>
                <td className="border px-4 py-2">Visualizer</td>
              </tr>

              <tr>
                <td className="border px-4 py-2">
                  <div className="grid grid-cols-3 divide-x">
                    <div>buttons01</div>
                    <div>buttons02</div>
                    <div>buttons03</div>
                  </div>
                </td>
                <td className="border px-4 py-2">Butons2</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>







  )
}

export default Table;