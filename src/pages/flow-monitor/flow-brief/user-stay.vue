<template>
  <div class="user-stay-container">
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="amountId"
        label="日期"
        width="180">
      </el-table-column>
      <el-table-column
        prop="amountType"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="amountTypeCn"
        label="地址">
      </el-table-column>
    </el-table>
  </div>
</template>
<style>
.user-stay-container .el-row {
  margin-bottom: 20px;
}
</style>

<script>
import {getTable } from '@/api/demo';

export default {
  name: "UserStay",
  data() {
    return {
      title: "user stay page",
      tabPosition: "",
      searchDate: "",
      activeName: "",
      columnName: [
        {
          index: "0",
          label: "日期",
          prop: "date"
        },
        {
          index: "1",
          label: "新增用户数",
          prop: "userNumber"
        },
        {
          index: "2",
          label: "1天后",
          prop: "one"
        },
        {
          index: "3",
          label: "2天后",
          prop: "two"
        },
        {
          index: "4",
          label: "3天后",
          prop: "three"
        },
        {
          index: "5",
          label: "4天后",
          prop: "four"
        },
        {
          index: "6",
          label: "5天后",
          prop: "five"
        },
        {
          index: "7",
          label: "6天后",
          prop: "six"
        },
        {
          index: "8",
          label: "7天后",
          prop: "week"
        },
        {
          index: "9",
          label: "14天后",
          prop: "fortnight"
        },
        {
          index: "10",
          label: "30天后",
          prop: "month"
        }
      ],
      tableData: [
      ]
    };
  },
  mounted() {
    this.tabPosition = "seven";
    this.activeName = "first";
    this.getData()
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
      this.columnName[1].label = tab.label + "数";
      // TODO 刷新列表
    },
    tabChange(event) {
      console.log(event);
      // TODO 刷新列表
    },
    dateChange(event) {
      console.log(event);
      // TODO 刷新列表
    },
    async getData() {
            try {
                this.tableData = await getTable([]);
            } catch (e) {
                console.log(e)
            }
        }
  }
};
</script>
