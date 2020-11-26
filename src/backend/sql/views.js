module.exports = `
select 
  table_name as "pureName",
  table_schema as "schemaName",
  view_definition as "createSql",
  md5(view_definition) as "hashCode"
from
  information_schema.views 
where table_schema != 'information_schema' and table_schema != 'pg_catalog'
  and ('views:' || table_schema || '.' ||  table_name) =OBJECT_ID_CONDITION
`;
