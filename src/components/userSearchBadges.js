import React from 'react';

function userSearchBadges(badges) {
  const [query, setQuery] = React.useState('');
  const [type, setType] = React.useState('');
  const [filteredBadges, setFilteredBadges] = React.useState(badges);

  //useMemo es para memorizar los resultados del query
  React.useMemo(() => {
    const result = badges.filter(badge => {
      let isType = true;
      
      if(type.length > 0 && type != "All"){
        isType = `${badge.type}`.includes(type);
      }

      let isQuery = `${badge.firstName} ${badge.lastName}`
       .toLowerCase()
       .includes(query.toLowerCase());

      return (isQuery && isType);
    });

    setFilteredBadges(result);
  }, [badges, query + type]);

  return { query, setQuery,type, setType,filteredBadges };
}

export default userSearchBadges;
