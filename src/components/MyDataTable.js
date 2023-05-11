import { useEffect, useState } from "react";
import DataTable from 'react-data-table-component';

const MyDataTable = () => {
  const [data, setData] = useState([]); // Data to be displayed in the table
  const [loading, setLoading] = useState(true); // Loading state while fetching data

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://bhaibhopal.org/api/items/read');
        if (response.ok) {
          const jsonData = await response.json();
          setData(jsonData.items);
        } else {
          console.error('Error fetching data:', response.status);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const columns = [
    {
      name: data.name,
      selector: (row) => row.id,
      sortable: true,
    },
    {
      name: 'Name',
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: 'Email',
      selector: (row) => row.email,
      sortable: true,
    },
    // Add more columns as needed
  ];

  console.log(data);

  return (
    <DataTable
      title="My Data Table"
      columns={columns}
      data={data}
      progressPending={loading}
      pagination
      highlightOnHover
      striped
      searchable
    />
  );
};

export default MyDataTable;
