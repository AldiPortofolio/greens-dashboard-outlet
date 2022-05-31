import Table from '@/components/shared/table/table.component';
import ButtonFilter from '@/components/shared/button-filter/button-filter.component';

const ListData = () => {
  return (
    <Table>
      <thead>
        <tr>
          <th></th>
          <th>Customer</th>
          <th>Order</th>
          <th>Time</th>
          <th>Status</th>
          <th>Note</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>
            Customer 1 <p>+08123456XXX</p>
          </td>
          <td className="w-64">
            <div className="grid grid-cols-1 divide-y space-y-2.5">
              <p>
                (Kid) Hyperlocal GREENS Pasta with Swedish Meatballs -
                <span>x1</span>
              </p>
              <p>
                Hyperlocal GREENS Pasta with Tofu Parmigiana - <span>x1</span>
              </p>
              <p>
                Hyperlocal GREENS Pasta with Marinara Sauce - <span>x1</span>
              </p>
            </div>
          </td>
          <td>
            <p>10:30</p>
          </td>
          <td>
            <p>New order</p>
          </td>
          <td>
            <p>Jangan Menggunakan Kacang dan susu</p>
          </td>
          <td>
            <ButtonFilter
              color="outline_primary"
              title="Check Detail"
              type="square"
            />
          </td>
        </tr>
        <tr>
          <td>2</td>
          <td>
            Customer 1 <p>+08123456XXX</p>
          </td>
          <td className="w-64">
            <div className="grid grid-cols-1 divide-y space-y-2.5">
              <p>
                (Kid) Hyperlocal GREENS Pasta with Swedish Meatballs -{' '}
                <span>x1</span>
              </p>
              <p>
                Hyperlocal GREENS Pasta with Tofu Parmigiana - <span>x1</span>
              </p>
              <p>
                Hyperlocal GREENS Pasta with Marinara Sauce - <span>x1</span>
              </p>
            </div>
          </td>
          <td>
            <p>10:30</p>
          </td>
          <td>
            <p>New order</p>
          </td>
          <td>
            <p>Jangan Menggunakan Kacang dan susu</p>
          </td>
          <td>
            <ButtonFilter
              color="outline_primary"
              title="Check Detail"
              type="square"
            />
          </td>
        </tr>
        <tr>
          <td>3</td>
          <td>
            Customer 1 <p>+08123456XXX</p>
          </td>
          <td className="w-64">
            <div className="grid grid-cols-1 divide-y space-y-2.5">
              <p>
                (Kid) Hyperlocal GREENS Pasta with Swedish Meatballs -{' '}
                <span>x1</span>
              </p>
              <p>
                Hyperlocal GREENS Pasta with Tofu Parmigiana - <span>x1</span>
              </p>
              <p>
                Hyperlocal GREENS Pasta with Marinara Sauce - <span>x1</span>
              </p>
            </div>
          </td>
          <td>
            <p>10:30</p>
          </td>
          <td>
            <p>New order</p>
          </td>
          <td>
            <p>Jangan Menggunakan Kacang dan susu</p>
          </td>
          <td>
            <ButtonFilter
              color="outline_primary"
              title="Check Detail"
              type="square"
            />
          </td>
        </tr>
        <tr>
          <td>4</td>
          <td>
            Customer 1 <p>+08123456XXX</p>
          </td>
          <td className="w-64">
            <div className="grid grid-cols-1 divide-y space-y-2.5">
              <p>
                (Kid) Hyperlocal GREENS Pasta with Swedish Meatballs -{' '}
                <span>x1</span>
              </p>
              <p>
                Hyperlocal GREENS Pasta with Tofu Parmigiana - <span>x1</span>
              </p>
              <p>
                Hyperlocal GREENS Pasta with Marinara Sauce - <span>x1</span>
              </p>
            </div>
          </td>
          <td>
            <p>10:30</p>
          </td>
          <td>
            <p>New order</p>
          </td>
          <td>
            <p>Jangan Menggunakan Kacang dan susu</p>
          </td>
          <td>
            <ButtonFilter
              color="outline_primary"
              title="Check Detail"
              type="square"
            />
          </td>
        </tr>
        <tr>
          <td>5</td>
          <td>
            Customer 1 <p>+08123456XXX</p>
          </td>
          <td className="w-64">
            <div className="grid grid-cols-1 divide-y space-y-2.5">
              <p>
                (Kid) Hyperlocal GREENS Pasta with Swedish Meatballs -{' '}
                <span>x1</span>
              </p>
              <p>
                Hyperlocal GREENS Pasta with Tofu Parmigiana - <span>x1</span>
              </p>
              <p>
                Hyperlocal GREENS Pasta with Marinara Sauce - <span>x1</span>
              </p>
            </div>
          </td>
          <td>
            <p>10:30</p>
          </td>
          <td>
            <p>New order</p>
          </td>
          <td>
            <p>Jangan Menggunakan Kacang dan susu</p>
          </td>
          <td>
            <ButtonFilter
              color="outline_primary"
              title="Check Detail"
              type="square"
            />
          </td>
        </tr>
        <tr>
          <td>6</td>
          <td>
            Customer 1 <p>+08123456XXX</p>
          </td>
          <td className="w-64">
            <div className="grid grid-cols-1 divide-y space-y-2.5">
              <p>
                (Kid) Hyperlocal GREENS Pasta with Swedish Meatballs -{' '}
                <span>x1</span>
              </p>
              <p>
                Hyperlocal GREENS Pasta with Tofu Parmigiana - <span>x1</span>
              </p>
              <p>
                Hyperlocal GREENS Pasta with Marinara Sauce - <span>x1</span>
              </p>
            </div>
          </td>
          <td>
            <p>10:30</p>
          </td>
          <td>
            <p>New order</p>
          </td>
          <td>
            <p>Jangan Menggunakan Kacang dan susu</p>
          </td>
          <td>
            <ButtonFilter
              color="outline_primary"
              title="Check Detail"
              type="square"
            />
          </td>
        </tr>
        <tr>
          <td>7</td>
          <td>
            Customer 1 <p>+08123456XXX</p>
          </td>
          <td className="w-64">
            <div className="grid grid-cols-1 divide-y space-y-2.5">
              <p>
                (Kid) Hyperlocal GREENS Pasta with Swedish Meatballs -{' '}
                <span>x1</span>
              </p>
              <p>
                Hyperlocal GREENS Pasta with Tofu Parmigiana - <span>x1</span>
              </p>
              <p>
                Hyperlocal GREENS Pasta with Marinara Sauce - <span>x1</span>
              </p>
            </div>
          </td>
          <td>
            <p>10:30</p>
          </td>
          <td>
            <p>New order</p>
          </td>
          <td>
            <p>Jangan Menggunakan Kacang dan susu</p>
          </td>
          <td>
            <ButtonFilter
              color="outline_primary"
              title="Check Detail"
              type="square"
            />
          </td>
        </tr>
        <tr>
          <td>8</td>
          <td>
            Customer 1 <p>+08123456XXX</p>
          </td>
          <td className="w-64">
            <div className="grid grid-cols-1 divide-y space-y-2.5">
              <p>
                (Kid) Hyperlocal GREENS Pasta with Swedish Meatballs -{' '}
                <span>x1</span>
              </p>
              <p>
                Hyperlocal GREENS Pasta with Tofu Parmigiana - <span>x1</span>
              </p>
              <p>
                Hyperlocal GREENS Pasta with Marinara Sauce - <span>x1</span>
              </p>
            </div>
          </td>
          <td>
            <p>10:30</p>
          </td>
          <td>
            <p>New order</p>
          </td>
          <td>
            <p>Jangan Menggunakan Kacang dan susu</p>
          </td>
          <td>
            <ButtonFilter
              color="outline_primary"
              title="Check Detail"
              type="square"
            />
          </td>
        </tr>
        <tr>
          <td>9</td>
          <td>
            Customer 1 <p>+08123456XXX</p>
          </td>
          <td className="w-64">
            <div className="grid grid-cols-1 divide-y space-y-2.5">
              <p>
                (Kid) Hyperlocal GREENS Pasta with Swedish Meatballs -{' '}
                <span>x1</span>
              </p>
              <p>
                Hyperlocal GREENS Pasta with Tofu Parmigiana - <span>x1</span>
              </p>
              <p>
                Hyperlocal GREENS Pasta with Marinara Sauce - <span>x1</span>
              </p>
            </div>
          </td>
          <td>
            <p>10:30</p>
          </td>
          <td>
            <p>New order</p>
          </td>
          <td>
            <p>Jangan Menggunakan Kacang dan susu</p>
          </td>
          <td>
            <ButtonFilter
              color="outline_primary"
              title="Check Detail"
              type="square"
            />
          </td>
        </tr>
        <tr>
          <td>10</td>
          <td>
            Customer 1 <p>+08123456XXX</p>
          </td>
          <td className="w-64">
            <div className="grid grid-cols-1 divide-y space-y-2.5">
              <p>
                (Kid) Hyperlocal GREENS Pasta with Swedish Meatballs -{' '}
                <span>x1</span>
              </p>
              <p>
                Hyperlocal GREENS Pasta with Tofu Parmigiana - <span>x1</span>
              </p>
              <p>
                Hyperlocal GREENS Pasta with Marinara Sauce - <span>x1</span>
              </p>
            </div>
          </td>
          <td>
            <p>10:30</p>
          </td>
          <td>
            <p>New order</p>
          </td>
          <td>
            <p>Jangan Menggunakan Kacang dan susu</p>
          </td>
          <td>
            <ButtonFilter
              color="outline_primary"
              title="Check Detail"
              type="square"
            />
          </td>
        </tr>
        <tr>
          <td>11</td>
          <td>
            Customer 1 <p>+08123456XXX</p>
          </td>
          <td className="w-64">
            <div className="grid grid-cols-1 divide-y space-y-2.5">
              <p>
                (Kid) Hyperlocal GREENS Pasta with Swedish Meatballs -{' '}
                <span>x1</span>
              </p>
              <p>
                Hyperlocal GREENS Pasta with Tofu Parmigiana - <span>x1</span>
              </p>
              <p>
                Hyperlocal GREENS Pasta with Marinara Sauce - <span>x1</span>
              </p>
            </div>
          </td>
          <td>
            <p>10:30</p>
          </td>
          <td>
            <p>New order</p>
          </td>
          <td>
            <p>Jangan Menggunakan Kacang dan susu</p>
          </td>
          <td>
            <ButtonFilter
              color="outline_primary"
              title="Check Detail"
              type="square"
            />
          </td>
        </tr>
        <tr>
          <td>12</td>
          <td>
            Customer 1 <p>+08123456XXX</p>
          </td>
          <td className="w-64">
            <div className="grid grid-cols-1 divide-y space-y-2.5">
              <p>
                (Kid) Hyperlocal GREENS Pasta with Swedish Meatballs -{' '}
                <span>x1</span>
              </p>
              <p>
                Hyperlocal GREENS Pasta with Tofu Parmigiana - <span>x1</span>
              </p>
              <p>
                Hyperlocal GREENS Pasta with Marinara Sauce - <span>x1</span>
              </p>
            </div>
          </td>
          <td>
            <p>10:30</p>
          </td>
          <td>
            <p>New order</p>
          </td>
          <td>
            <p>Jangan Menggunakan Kacang dan susu</p>
          </td>
          <td>
            <ButtonFilter
              color="outline_primary"
              title="Check Detail"
              type="square"
            />
          </td>
        </tr>
        <tr>
          <td>13</td>
          <td>
            Customer 1 <p>+08123456XXX</p>
          </td>
          <td className="w-64">
            <div className="grid grid-cols-1 divide-y space-y-2.5">
              <p>
                (Kid) Hyperlocal GREENS Pasta with Swedish Meatballs -{' '}
                <span>x1</span>
              </p>
              <p>
                Hyperlocal GREENS Pasta with Tofu Parmigiana - <span>x1</span>
              </p>
              <p>
                Hyperlocal GREENS Pasta with Marinara Sauce - <span>x1</span>
              </p>
            </div>
          </td>
          <td>
            <p>10:30</p>
          </td>
          <td>
            <p>New order</p>
          </td>
          <td>
            <p>Jangan Menggunakan Kacang dan susu</p>
          </td>
          <td>
            <ButtonFilter
              color="outline_primary"
              title="Check Detail"
              type="square"
            />
          </td>
        </tr>
        <tr>
          <td>14</td>
          <td>
            Customer 1 <p>+08123456XXX</p>
          </td>
          <td className="w-64">
            <div className="grid grid-cols-1 divide-y space-y-2.5">
              <p>
                (Kid) Hyperlocal GREENS Pasta with Swedish Meatballs -{' '}
                <span>x1</span>
              </p>
              <p>
                Hyperlocal GREENS Pasta with Tofu Parmigiana - <span>x1</span>
              </p>
              <p>
                Hyperlocal GREENS Pasta with Marinara Sauce - <span>x1</span>
              </p>
            </div>
          </td>
          <td>
            <p>10:30</p>
          </td>
          <td>
            <p>New order</p>
          </td>
          <td>
            <p>Jangan Menggunakan Kacang dan susu</p>
          </td>
          <td>
            <ButtonFilter
              color="outline_primary"
              title="Check Detail"
              type="square"
            />
          </td>
        </tr>
      </tbody>
    </Table>
  );
};

export default ListData;
