// <copyright file="ModelMapping.cs" company="Acme">
// Copyright (c) Acme. All rights reserved.
// </copyright>

namespace Acme.Productivity.Pomodoro.Data.EntityFramework.Model
{
    using System;
    using System.Linq;

    using Acme.Productivity.Pomodoro.Core;

    using AutoMapper;

    /// <summary>
    /// Mapping for data model.
    /// </summary>
    public class ModelMapping : Profile
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="ModelMapping"/> class.
        /// </summary>
        public ModelMapping()
        {
            this.CreateMap<User, AuthenticatedUser>()
                .ForMember(x => x.Id, opt => opt.MapFrom(s => s.Id))
                .ForMember(x => x.Name, opt => opt.MapFrom(s => s.UserName));
        }
    }
}