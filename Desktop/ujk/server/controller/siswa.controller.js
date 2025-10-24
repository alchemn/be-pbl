import prisma from "../utils/prisma.js";

export async function getSiswa(req,res) {
    try {
        const data = await prisma.siswa.findMany()
        res.status(201).json({
            message: "Data Siswa", data
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}


export async function getSiswaById(req,res){
    try {
        const {id} = req.params;
        const data  = await prisma.siswa.findUnique({
            where: {
                id
            }
        })
        res.status(201).json({
            message: "Data Siswa",data
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

export async function createSiswa(req,res){
    try {
        const {kodesiswa,namasiswa,tanggal_lahir,jurusan_siswa} = req.body;
        const data = await prisma.siswa.create({
            data:{
                kodesiswa,namasiswa,tanggal_lahir: new Date(tanggal_lahir),jurusan_siswa
            }
        })
        res.status(201).json({message: "Data Success Created",data})
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}


export async function updateSiswa(req,res) {
    try {
        const {id} = req.params
        const {kodesiswa,namasiswa,tanggal_lahir,jurusan_siswa} = req.body;
        const data = await prisma.siswa.update({
            where: {
                id
            },
            data: {
                kodesiswa,namasiswa,tanggal_lahir: new Date(tanggal_lahir),jurusan_siswa
            }
        })
        res.status(201).json({
            message: "Data Updated Success",data
        })
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}


export async function deleteSiswa(req,res) {
    try {
        const {id} = req.params
        const data = await prisma.siswa.delete({
            where: {
                id
            }
        })
        res.status(201).json({message:"Data Deleted"})
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}