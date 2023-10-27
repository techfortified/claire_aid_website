'use client'

import { useCallback, useMemo, useState } from 'react';
import { subDays, subHours } from 'date-fns';
// import ArrowDownOnSquareIcon from '@heroicons/react/24/solid/ArrowDownOnSquareIcon';
// import ArrowUpOnSquareIcon from '@heroicons/react/24/solid/ArrowUpOnSquareIcon';
// import PlusIcon from '@heroicons/react/24/solid/PlusIcon';
import { Box, Button, Container, Stack, SvgIcon, Typography } from '@mui/material';
// import { useSelection } from 'src/hooks/use-selection';
// import { applyPagination } from 'src/utils/apply-pagination';
import { Spinner, VolunteersTable } from '../atoms';
import { Add as PlusIcon } from '@mui/icons-material';
import { useAuthUser } from '@/lib/auth';
import { useVolunteers } from '@/lib/volunteers';



const now = new Date();

const applyPagination = (data, page, rowsPerPage) =>{
  return data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
}

const useCustomers = (data, page, rowsPerPage) => {
  return useMemo(
    () => {
      return applyPagination(data, page, rowsPerPage);
    },
    [page, rowsPerPage]
  );
};

const useCustomerIds = (customers) => {
  return useMemo(
    () => {
      return customers.map((customer) => customer.id);
    },
    [customers]
  );
};

const DashboardComponent = ({ data }) => {

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const volunteers = useCustomers(data, page, rowsPerPage);
  const customersIds = useCustomerIds(volunteers);

  const handlePageChange = useCallback(
    (_, value) => {
      setPage(value);
    },
    []
  );

  const handleRowsPerPageChange = useCallback(
    (event) => {
      setRowsPerPage(event.target.value);
    },
    []
  );
  return (
    <>

      <Container maxWidth="xl">
        <Stack spacing={3}>
          <Stack
            direction="row"
            justifyContent="space-between"
            spacing={4}
          >
            <Stack spacing={1}>
              <Typography variant="h4">
                Volunteers
              </Typography>
              <Stack
                alignItems="center"
                direction="row"
                spacing={1}
              >
                <Button
                  color="inherit"
                  startIcon={(
                    <SvgIcon fontSize="small">
                      {/* <ArrowUpOnSquareIcon /> */}
                    </SvgIcon>
                  )}
                >
                  Import
                </Button>
                <Button
                  color="inherit"
                  startIcon={(
                    <SvgIcon fontSize="small">
                      {/* <ArrowDownOnSquareIcon /> */}
                    </SvgIcon>
                  )}
                >
                  Export
                </Button>
              </Stack>
            </Stack>
            <div>
              <Button
                startIcon={(
                  <SvgIcon fontSize="small">
                    <PlusIcon />
                  </SvgIcon>
                )}
                variant="contained"
              >
                Add
              </Button>
            </div>
          </Stack>
          {/* <CustomersSearch /> */}
          <VolunteersTable
            count={data.length}
            items={volunteers}
            // onDeselectAll={customersSelection.handleDeselectAll}
            // onDeselectOne={customersSelection.handleDeselectOne}
            onPageChange={handlePageChange}
            onRowsPerPageChange={handleRowsPerPageChange}
            // onSelectAll={customersSelection.handleSelectAll}
            // onSelectOne={customersSelection.handleSelectOne}
            page={page}
            rowsPerPage={rowsPerPage}
          // selected={customersSelection.selected}
          />
        </Stack>
      </Container>

    </>
  );

}

const DashboardVolunteersTable = () => {
  const { data: user } = useAuthUser()
  const { data: volunteersData, isLoading, isError } = useVolunteers(user?.accessToken)

  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8
      }}
      className={isLoading ? "loading" : undefined}
    >
      {isError && <Typography>Sorry an error occurred, refresh the page to try again</Typography>}
      {volunteersData ? <DashboardComponent data={volunteersData.map(d => ({ ...d, createdAt: subDays(subHours(now, 7), 1).getTime() }))} /> : null}
    </Box>)
};
export default DashboardVolunteersTable;
