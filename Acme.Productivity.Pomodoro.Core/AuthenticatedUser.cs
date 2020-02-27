// <copyright file="AuthenticatedUser.cs" company="Acme">
// Copyright (c) Acme. All rights reserved.
// </copyright>

namespace Acme.Productivity.Pomodoro.Core
{
    using System;
    using System.Text.Json.Serialization;

    /// <summary>
    /// Represent an authenticated user.
    /// </summary>
    public class AuthenticatedUser
    {
        /// <summary>
        /// Gets or sets the Id.
        /// </summary>
        /// <value>The Id.</value>
        [JsonIgnore]
        public Guid Id { get; set; }

        /// <summary>
        /// Gets or sets the Bearer.
        /// </summary>
        /// <value>The Bearer.</value>
        public string Bearer { get; set; }

        /// <summary>
        /// Gets or sets the Name.
        /// </summary>
        /// <value>The Name.</value>
        public string Name { get; set; }
    }
}