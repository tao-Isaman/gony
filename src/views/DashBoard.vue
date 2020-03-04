<template>
  <div>
    <v-row justfy="center" align="center">
      <v-col cols="4">
        <v-card class="mx-auto" max-width="344" outlined>
          <v-list-item three-line>
            <v-list-item-content>
              <div class="overline mb-4">ยอดหนี้ทั้งหมด</div>
              <v-list-item-title class="headline mb-1">{{allLoan.totalDdebt}}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-card>
      </v-col>
      <v-col cols="4">
        <v-card class="mx-auto" max-width="344" outlined>
          <v-list-item three-line>
            <v-list-item-content>
              <div class="overline mb-4">ยอดคืนทั้งหมด</div>
              <v-list-item-title class="headline mb-1">{{allLoan.totalPaidAmount}}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-card>
      </v-col>
      <v-col cols="4">
        <v-card class="mx-auto" max-width="344" outlined>
          <v-list-item three-line>
            <v-list-item-content>
              <div class="overline mb-4">ยอดหนี้คงเหลือ</div>
              <v-list-item-title class="headline mb-1">{{allLoan.totalRemainingAmount}}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-card>
      </v-col>
    </v-row>
    <div>
      <v-row :align="alignment" justify="center" class="grey lighten-5" style="height: 300px;">
        <v-col>
          <v-text-field label="ค้นหารายชื่อ" single-line outlined></v-text-field>
        </v-col>
        <v-col justify="start">
          <v-btn x-large color="succe ss">ค้นหา</v-btn>
        </v-col>
      </v-row>
      <!-- <v-layout text-center wrap>
        <v-flex mb-4>
          <v-row align="center" justify="center">
            <v-col cols="2"></v-col>
            <v-col>
              <v-text-field label="ค้นหารายชื่อ" single-line outlined></v-text-field>
            </v-col>
            <v-col>
              <v-btn x-large color="success">ค้นหา</v-btn>
            </v-col>
            <v-col cols="2"></v-col>
          </v-row>
        </v-flex>
      </v-layout>-->
    </div>

    <div>
      <!-- <table class="table table-bordered" style="width:100%">
        <tr>
          <td>ชื่ิอ นามสกุล</td>

          <td>ยอดหนี้</td>
          <td>ยอดคืน</td>
          <td>ยอดหนี้คงเหลือ</td>
          <td>เช็คยอดผ่อน</td>
        </tr>
        <tr v-for="lists in userList" :key="lists.firstName">
          <td>{{lists.firstName}} {{lists.lastName}}</td>

          <td>{{lists.totalLone}}</td>
          <td>{{lists.paidAmount}}</td>
          <td>{{lists.remainingAmount}}</td>
          <td>
            <v-btn color="primary" small>Click</v-btn>
          </td>
        </tr>
      </table>-->
      <v-data-table :headers="headers" :items="userList" class="elevation-1">
        <template :color="red" v-slot:item.firstName="{ item }">{{item.firstName}} {{item.lastName}}</template>
      </v-data-table>
    </div>
  </div>
</template>


<script>
import userService from "../service/userservice";
export default {
  name: 'DashBoard',
  props: {
    msg: String
  },
  data() {
    return {
      headers: [

        { text: 'ชื่ิอ-นามสกุล', value: 'firstName' },
        { text: 'ยอดหนี้', value: 'totalLone' },
        { text: 'ยอดคืน', value: 'paidAmount' },
        { text: 'ยอดหนี้คงเหลือ', value: 'remainingAmount' },
        { text: 'เช็คยอดผ่อน' },
      ],
      muckup: {
        list: {
          firstname: "isaman",
          lastname: "s. nam",
          lone: 30000.00,


        }


      },

      allLoan: {},
      userList: []
    }

  },
  mounted() {
    this.allLoan = userService.getTotalLoan()
    console.log(this.allLoan)
    this.userList = userService.getUserList()

  }



}
</script>

<style scoped>
</style>