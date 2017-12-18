import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";
import { Welcome } from "@storybook/react/demo";
import { tableColumns, tableData } from "../Data/TableData";
import { Table, Paginator, Button } from "../build/index.es.js";

storiesOf("Welcome", module).add("to Storybook", () => (
  <Welcome showApp={linkTo("Button")} />
));

storiesOf("Button", module).add("with text", () => (
    <Button title="Hello Button" />
  ))

storiesOf("Table", module).add("Table Component", () => (
  <Table data={tableData} columns={tableColumns} />
));

storiesOf("Paginator", module).add("Paginator Component", () => (
  <Paginator currentPage={5} numberOfPages={15} />
));
