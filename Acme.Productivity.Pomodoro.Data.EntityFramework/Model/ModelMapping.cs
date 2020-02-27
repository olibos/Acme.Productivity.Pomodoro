// <copyright file="ModelMapping.cs" company="Acme">
// Copyright (c) Acme. All rights reserved.
// </copyright>

namespace Acme.Productivity.Pomodoro.Data.EntityFramework.Model
{
    using System;
    using System.Linq;

    using Acme.Productivity.Pomodoro.Core;

    using AutoMapper;

    public class ModelMapping : Profile
    {
        /// <summary>
        /// Creates an instance of the profile.
        /// </summary>
        public ModelMapping()
        {
            this.CreateMap<User, AuthenticatedUser>()
                .ForMember(x => x.Id, opt => opt.MapFrom(s => s.Id))
                .ForMember(x => x.Name, opt => opt.MapFrom(s => s.UserName));
        }
    }
}