import * as React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

type Table<T = {}> = {
  data: T[];
  columns: GridColDef[];
  title?: string;
  button?: React.ReactNode;
};

export const Table: React.FC<Table> = ({
  data,
  columns,
  title,
  button
}) => {
  return (
    <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
       <AppBar elevation={0} color="transparent" position="relative">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            {title}
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
          {button}
          </Box>
        </Toolbar>
      </AppBar>
      <Box sx={{ flexGrow: 1 }}>
        <DataGrid
          style={{ borderRadius: 0, borderWidth: 0 }}
          rows={data}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 10,
              },
            },
          }}
          pageSizeOptions={[5]}
          disableRowSelectionOnClick
          rowSelection={false}
        />
      </Box>
    </Box>
      
  );
}