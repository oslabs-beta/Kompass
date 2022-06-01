import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

const GetNamespaceComp = (props: any): JSX.Element => {
  const { items } = props.namespaceInfo || {};
  const [ns, setNs] = React.useState('');

  let allNamespaces: string[] = [];

  if (items) {
    allNamespaces = items.map((item: any, index: number) => {
      const name: string = item.metadata.name;
      return (
        <MenuItem value={name} key={index}>
          {name}
        </MenuItem>
      );
    });
  }

  const handleNamespaceChange = (e: any): void => {
    setNs(e.target.value as string);
    props.fetchPodData(e.target.value);
  };

  return (
    <div>
      <Box sx={{ minWidth: 400, mt: 2 }}>
        <FormControl fullWidth>
          <InputLabel id='demo-simple-select-label'>
            Namespace (default)
          </InputLabel>
          <Select id='drop-down' value={ns} onChange={handleNamespaceChange}>
            {allNamespaces}
          </Select>
        </FormControl>
      </Box>
    </div>
  );
};

export default GetNamespaceComp;
