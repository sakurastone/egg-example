"use strict";

const { Controller } = require("egg");

class HomeController extends Controller {
    async index() {
        const { ctx } = this;
        await ctx.render("index.html", {
            title: "我要娶申鹤为妻",
        });
    }
    async user() {
        const { ctx } = this;
        const result = await ctx.service.home.user();
        ctx.body = result;
    }
    async addUser() {
        const { ctx } = this;
        const { name } = ctx.request.body;
        try {
            const result = await ctx.service.home.addUser(name);
            ctx.body = {
                code: 200,
                msg: "添加成功",
                data: null,
            };
        } catch (err) {
            ctx.body = {
                code: 500,
                msg: "添加失败",
                data: null,
            };
        }
    }
    async editUser() {
        const { ctx } = this;
        const { id, name } = ctx.request.body;
        try {
            const result = await ctx.service.home.editUser(id, name);
            ctx.body = {
                code: 200,
                msg: "更新成功",
                data: null,
            };
        } catch (error) {
            console.log(error);
            ctx.body = {
                code: 500,
                msg: "更新失败",
                data: null,
            };
        }
    }
    async deleteUser() {
        const { ctx } = this;
        const { id } = ctx.request.body;
        try {
            const result = await ctx.service.home.deleteUser(id);
            ctx.body = {
                code: 200,
                msg: "删除成功",
                data: null,
            };
        } catch (error) {
            console.log(error);
            ctx.body = {
                code: 500,
                msg: "删除失败",
                data: null,
            };
        }
    }
}

module.exports = HomeController;
