<template>
  <div class="user-stay-container">
    <P>{{ title }}</P>
    <el-row style="text-align: left">
      <el-col :span="24">
        <el-radio-group
          v-model="tabPosition"
          @change="tabChange"
          style="margin-right: 20px"
        >
          <el-radio-button label="seven">最近7天</el-radio-button>
          <el-radio-button label="thirty">最近30天</el-radio-button>
        </el-radio-group>
        <el-date-picker
          v-model="searchDate"
          type="daterange"
          range-separator="至"
          start-placeholder="开始时间"
          end-placeholder="结束时间"
          @change="dateChange"
        >
        </el-date-picker>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="新增用户" name="first"></el-tab-pane>
          <el-tab-pane label="活跃用户" name="second"></el-tab-pane>
          <el-tab-pane label="消费用户" name="third"></el-tab-pane>
        </el-tabs>
      </el-col>
    </el-row>
    <el-row>
      <el-col>
        <el-table :data="tableData" style="width: 100%">
          <el-table-column
            v-for="item in columnName"
            :key="item.index"
            :prop="item.prop"
            :label="item.label"
          >
          </el-table-column>
        </el-table>
      </el-col>
    </el-row>
  </div>
</template>
<style>
.user-stay-container .el-row {
  margin-bottom: 20px;
}
</style>

<script>
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
        {
          date: "2020-04-16",
          userNumber: "1230",
          one: "",
          two: "",
          three: "",
          four: "",
          five: "",
          six: "",
          seven: "",
          fortnight: "",
          month: ""
        },
        {
          date: "2020-04-16",
          userNumber: "2280",
          one: "",
          two: "",
          three: "",
          four: "",
          five: "",
          six: "",
          seven: "",
          fortnight: "",
          month: ""
        },
        {
          date: "2020-04-15",
          userNumber: "1470",
          one: "",
          two: "",
          three: "",
          four: "",
          five: "",
          six: "",
          seven: "",
          fortnight: "",
          month: ""
        },
        {
          date: "2020-04-14",
          userNumber: "473",
          one: "",
          two: "",
          three: "",
          four: "",
          five: "",
          six: "",
          seven: "",
          fortnight: "",
          month: ""
        }
      ]
    };
  },
  mounted() {
    this.tabPosition = "seven";
    this.activeName = "first";
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
    }
  }
};
</script>
